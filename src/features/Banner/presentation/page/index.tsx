import { BannerRepositoryImpl } from '../../data/BannerRepositoryImpL';
import { getBanner } from '../../domain/usecases';
import { BannerList } from '../components/BannerList';

export const BannerPage = async () => {
  const repo = new BannerRepositoryImpl();
  const res = await getBanner(repo);

  const banners = res.data;

  return <BannerList list={banners ?? []} />;
};
