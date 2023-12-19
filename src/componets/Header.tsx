import Link from 'next/link'

export default function Header() {
  return (
    <header>
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
