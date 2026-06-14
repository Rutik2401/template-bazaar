/**
 * Export a DOM node to a high-resolution PDF.
 *
 * Why a clone? The on-screen template is CSS `transform: scale()`-d to fit the
 * preview pane. Capturing that scaled node makes html2canvas crop/blur the
 * output. Instead we mount a full-size, unscaled clone off-screen, capture it at
 * its true design resolution, then remove it — reliable and crisp every time.
 *
 * gradient text: html2canvas can't rasterize `-webkit-background-clip: text`
 * (the text comes out invisible). Any element marked `data-pdf-color="#xxxxxx"`
 * is flattened to that solid colour in the clone so it always shows in the PDF.
 *
 * @param {HTMLElement} node            Element to capture (the template canvas).
 * @param {object}      [options]
 * @param {string}      [options.fileName='laksh-document.pdf']
 * @param {number}      [options.scale=2] Pixel density multiplier for sharpness.
 * @returns {Promise<void>}
 */
export async function exportNodeToPdf(node, { fileName = 'laksh-document.pdf', scale = 2 } = {}) {
  if (!node) throw new Error('exportNodeToPdf: target node is missing')

  // Load the heavy rasterisation libs only when the user actually exports.
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import('html2canvas'),
    import('jspdf'),
  ])

  // Make sure premium web fonts are painted before we rasterise.
  if (document.fonts?.ready) {
    try {
      await document.fonts.ready
    } catch {
      /* non-fatal */
    }
  }

  const width = node.offsetWidth // natural design width (ignores CSS scale)
  const height = node.offsetHeight

  // Mount a full-size, unscaled clone off-screen. It keeps every className, so
  // Tailwind + next/font styles still apply (same document).
  const holder = document.createElement('div')
  holder.setAttribute('aria-hidden', 'true')
  holder.style.cssText =
    `position:fixed;left:-100000px;top:0;width:${width}px;height:${height}px;` +
    'margin:0;padding:0;background:#ffffff;z-index:-1;pointer-events:none;overflow:hidden;'

  const clone = node.cloneNode(true)
  clone.style.transform = 'none'
  clone.style.margin = '0'

  // Flatten gradient-clipped text to a solid colour so it renders in the PDF.
  clone.querySelectorAll('[data-pdf-color]').forEach((el) => {
    const color = el.getAttribute('data-pdf-color')
    el.style.background = 'none'
    el.style.backgroundImage = 'none'
    el.style.webkitBackgroundClip = 'border-box'
    el.style.backgroundClip = 'border-box'
    el.style.color = color
    el.style.webkitTextFillColor = color
  })

  holder.appendChild(clone)
  document.body.appendChild(holder)

  try {
    const canvas = await html2canvas(clone, {
      scale,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
      width,
      height,
    })

    const imgData = canvas.toDataURL('image/png')
    const orientation = canvas.width >= canvas.height ? 'landscape' : 'portrait'

    const pdf = new jsPDF({
      orientation,
      unit: 'px',
      format: [canvas.width, canvas.height],
      hotfixes: ['px_scaling'],
    })

    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height, undefined, 'FAST')
    pdf.save(fileName)
  } finally {
    document.body.removeChild(holder)
  }
}
