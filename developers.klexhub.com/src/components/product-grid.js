import React from "react"
import "../css/components/product-grid.css"

const $ = {}
$["support-pp"] =
  "M256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm7.67-24h-16c-6.627 0-12-5.373-12-12v-.381c0-70.343 77.44-63.619 77.44-107.408 0-20.016-17.761-40.211-57.44-40.211-29.144 0-44.265 9.649-59.211 28.692-3.908 4.98-11.054 5.995-16.248 2.376l-13.134-9.15c-5.625-3.919-6.86-11.771-2.645-17.177C185.658 133.514 210.842 116 255.67 116c52.32 0 97.44 29.751 97.44 80.211 0 67.414-77.44 63.849-77.44 107.408V304c0 6.627-5.373 12-12 12zM256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8z"
$["klexhealth"] =
  "M224 232c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56h-56c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h56v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h56c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-56v-56zM369.9 98L286 14.1C277 5.1 264.8 0 252.1 0H48C21.5.1 0 21.6 0 48.1V464c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V132c0-12.7-5.1-25-14.1-34zM256 32.6c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9c2.1 2.1 3.5 4.6 4.2 7.4H256V32.6zM352 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V48.1C32 39.3 39.2 32 48 32h176v104.1c0 13.3 10.7 23.9 24 23.9h104v304z"

const products = [
  {
    title: "KlexHealth",
    path: "klexhealth",
    icon: "klexhealth",
  },
  {
    title: "Support++",
    path: "support-pp",
    icon: "support-pp",
  },
]

const ProductGridLink = ({ product }) => (
  <a
    className="ProductGrid--link"
    data-wrap-title={product.wrap}
    href={product.href || `http://developers.klexhub.com/${product.path}`}
  >
    <svg viewBox="0 0 512 512">
      <path d={$[product.icon]} fill={"#f7931e"} />
    </svg>
    <span>{product.title}</span>
  </a>
)

const ProductGridColumns = ({ numColumns }) => {
  const itemsPerColumn = Math.ceil(products.length / numColumns)

  const columns = []
  let n = 0
  for (let i = 0; i < numColumns; i += 1) {
    columns.push([])

    for (let j = 0; j < itemsPerColumn; j += 1) {
      if (n >= products.length) {
        break
      }
      columns[i].push(products[n])
      n += 1
    }
  }

  return (
    <React.Fragment>
      {columns.map((products, i) => (
        <div key={i} className="ProductGrid--column">
          {products.map((product, j) => (
            <ProductGridLink key={j} product={product} />
          ))}
        </div>
      ))}
    </React.Fragment>
  )
}

const ProductGrid = () => (
  <div className="ProductGrid">
    <div className="ProductGrid--content" data-columns="4">
      <ProductGridColumns numColumns={4} />
    </div>
    <div className="ProductGrid--content" data-columns="3">
      <ProductGridColumns numColumns={3} />
    </div>
    <div className="ProductGrid--content" data-columns="2">
      <ProductGridColumns numColumns={2} />
    </div>
    <div className="ProductGrid--content" data-columns="1">
      <ProductGridColumns numColumns={1} />
    </div>
  </div>
)

export default ProductGrid
