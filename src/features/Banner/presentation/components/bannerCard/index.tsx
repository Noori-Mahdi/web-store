'use client';
import { Edit, Trash } from 'lucide-react';
import { deleteBanner } from '../../serverAction/deleteBanner';
import { TUpdateBanner } from '../../../domain/entities/type';
import { useState } from 'react';
import Modal from '@/src/shared/components/modal';
import { ConfirmDialog } from '@/src/shared/components/confirmDialog';
import { BannerForm } from '../bannerForm';
import { TDelete } from '@/src/shared/types';

type TBannerCardProps = {
  banner: {
    id: string;
    image: string;
    title: string;
    tooltip: string;
    URL: string;
  };
};
export const BannerCard = ({ banner }: TBannerCardProps) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeletAlert, setShowDeleteAlert] = useState(false);

  const handleDelete = async () => {
    try {
      await deleteBanner(banner.id);
    } catch (error) {}
  };

  return (
    <div
      key={banner.id}
      className="border relative rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200"
    >
      <div className="absolute left-0 top-0">
        <Trash onClick={() => setShowDeleteAlert(true)} />
        <Edit
          onClick={() => {
            setShowEditForm(true);
          }}
        />
      </div>
      <div className="h-48 w-full overflow-hidden">
        <img
          src={banner.image}
          alt={banner.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{banner.title}</h3>
        <p className="text-sm text-gray-500">{banner.tooltip}</p>
        <div className="mt-2 inline-block text-blue-600 hover:underline">
          {banner.URL}
        </div>
      </div>
      <Modal
        isOpen={showEditForm}
        onClose={() => setShowEditForm(false)}
        label="Edit User"
      >
        <BannerForm
          banner={banner ?? undefined}
          mode="update"
          onClose={() => setShowEditForm(false)}
        />
      </Modal>

      <ConfirmDialog
        open={showDeletAlert}
        title="Delete user"
        description="Are you sure you want to delete this user?"
        onConfirm={handleDelete}
        onCancel={() => setShowDeleteAlert(false)}
      />
    </div>
  );
};
