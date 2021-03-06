import { GetServerSideProps } from 'next';
import {Title} from '../styles/pages/Home';

interface IProducts {
  id: string
  title: string
}

interface HomeProps {
  recommendedProducts: IProducts[]
}

export default function Home({recommendedProducts}: HomeProps) {
  return (
    <div>
      <section>
          <Title>Products</Title>
          <ul>
            {recommendedProducts ? recommendedProducts.map(recommendedProduct => (
              <li key={recommendedProduct.id}>{recommendedProduct.title}</li>
            )): null}
          </ul>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('http://localhost:3333/recommended')
  const recommendedProducts = await response.json()

  return {
    props: {
      recommendedProducts
    }
  }
}