export type TFakeEventFile = { target: { name: string; value: File | '' } };

export type TImageUploaderProps = {
  name: string;
  label: string;
  value: string | File | null;
  error?: string;
  onChange: (file: File | null) => void;
  onClickTrash: () => void;
};
