import { TextareaHTMLAttributes } from 'react';

export default function Result(
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea readOnly className="resize-none" rows={5} cols={30} {...props} />
  );
}
