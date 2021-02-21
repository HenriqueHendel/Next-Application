import {GetStaticProps} from 'next'

interface IProducts {
    id: string
    title: string
}

interface ITop10Props {
    products: IProducts[]
}

export default function top10({products}: ITop10Props) {
    return (
        <div>
          <ul>
            {products ? products.map(product => (
              <li key={product.id}>{product.title}</li>
            )): null}
          </ul>
        </div>
    )
}

export const getStaticProps: GetStaticProps<ITop10Props> = async (context) => {
    const response = await fetch('http://localhost:3333/products')
    const products = await response.json()

    return {
        props: {
            products
        },
        revalidate: 5
    }
}