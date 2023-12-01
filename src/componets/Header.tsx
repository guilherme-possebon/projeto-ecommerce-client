import Link from 'next/link'
import { css } from '../../styled-system/css'

export default function Header() {
  const StyleHeader = css({
    bg: '#222',
    '& a': {
      color: 'white'
    }
  })
  return (
    <header className={StyleHeader}>
      <Link href={'/'}>Ecommerce</Link>
      <nav>
        <Link href={'/'}>Pagina inicial</Link>
        <Link href={'/produtos'}>Todos os produtos</Link>
        <Link href={'/categorias'}>Categorias</Link>
        <Link href={'/conta'}>Conta</Link>
        <Link href={'/carrinho'}>Carrinho (0)</Link>
      </nav>
    </header>
  )
}
