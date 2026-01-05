import { TBanner } from '../../../domain/entities/type';
import { AddBannerBtn } from '../addBannerBtn';
import { BannerCard } from '../bannerCard';
import { BannerForm } from '../bannerForm';

export type TBannerListProps = {
  list?: TBanner[];
};

export const BannerList = ({ list }: TBannerListProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <AddBannerBtn />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {list?.map((banner) => (
          <BannerCard key={banner.id} banner={banner} />
        ))}
      </div>
    </div>
  );
};
