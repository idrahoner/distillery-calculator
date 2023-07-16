import Link from 'next/link';
import ButtonLink from './ButtonLink';

export default function GoHomeButton() {
  return (
    <ButtonLink href="/" className="w-40">
      <div className="flex justify-center items-center gap-2">
        <svg className="w-6 h-6 fill-none stroke-2 stroke-current">
          <use href="/distillery-calculator/images/icons.svg#icon-arrow-left"></use>
        </svg>
        На головну
      </div>
    </ButtonLink>
  );
}
