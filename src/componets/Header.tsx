import Link from 'next/link'
import Center from './Center'

export default function Header() {
	const NavLinks = 'text-[#aaa]'
	return (
		<header className="bg-[#222] text-white">
			<Center>
				<div className="flex justify-between py-[30px]">
					<Link className="no-underline" href={'/'}>
						Ecommerce
					</Link>
					<nav className="flex gap-4">
						<Link className={NavLinks} href={'/'}>
							Pagina inicial
						</Link>
						<Link className={NavLinks} href={'/produtos'}>
							Todos os produtos
						</Link>
						<Link className={NavLinks} href={'/categorias'}>
							Categorias
						</Link>
						<Link className={NavLinks} href={'/conta'}>
							Conta
						</Link>
						<Link className={NavLinks} href={'/carrinho'}>
							Carrinho (0)
						</Link>
					</nav>
				</div>
			</Center>
		</header>
	)
}
