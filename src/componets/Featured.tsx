import Image from 'next/image'
import Center from './Center'
import PrimaryBtn from './StyledComponents/PrimaryBtn'
import AddToCartIcon from './StyledComponents/AddToCartIcon'

import type { HomeProps } from '@/pages'
import ButtonLink from './StyledComponents/ButtonLink'

export default function Featured({ featuredProduct }: HomeProps) {
  return (
    <>
      <div className="bg-[#222] text-white py-[50px]">
        <Center>
          <div className="grid grid-cols-HeaderGrid gap-10">
            <div className="flex items-center flex-col">
              <div>
                <h1 className="text-white text-4xl">
                  {featuredProduct?.title}
                </h1>
                <p className="text-[#aaa] text-[.8rem]">
                  {featuredProduct?.description}
                </p>
                <div className="flex gap-2 mt-5">
                  <ButtonLink
                    href={'/produtos/' + featuredProduct?._id}
                    color="transparent"
                  >
                    Ler mais
                  </ButtonLink>
                  <PrimaryBtn>
                    <AddToCartIcon CartWidth="M" />
                  </PrimaryBtn>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                src={
                  'https://firebasestorage.googleapis.com/v0/b/nextjs-ecommerce-images-41632.appspot.com/o/teste16%201679151719649.png%20Thu%20Dec%2021%202023%2016%3A10%3A32%20GMT-0300%20(Horário%20Padrão%20de%20Brasília)?alt=media&token=18747440-4a80-4ca3-89e6-83a455ee6618'
                }
                alt="a random image"
                width={500}
                height={200}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </Center>
      </div>
    </>
  )
}
