import stylesHp from '../../styles/Homepage/Homepage.module.css'
import { PromoBlockResults } from '../../types/Common/blanko-promo-type'
import Image from 'next/image'

type Props = {
  allPromoBlocks: PromoBlockResults;
}

const PromoBlock = ({ allPromoBlocks }: Props) => {
  const promoBlock = allPromoBlocks?.results[0];

  return (
    <div key={promoBlock?.id} className={stylesHp.promoBoxOuter}>
      <h2>{promoBlock?.promoTitle}</h2>
      <div className={stylesHp.promoBox}>
        <Image
          alt=''
          src={promoBlock?.promoImage?.results[0].fileUrl}
          width='250'
          height='250'
          className={stylesHp.promoImage}
        />
        <p className={stylesHp.promoBoxText}>
          {promoBlock?.promoDescription}
        </p>
      </div>
    </div>
  )
}

export default PromoBlock