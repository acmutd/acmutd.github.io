/**
 * Component properties for an Info.
 */
type InfoProps = {
  /**
   * The header title.
   */
  title: string;

  /**
   * The contents of this paragraph.
   */
  body: string;
};

/**
 * A body paragraph with a title.
 */
export default function InfoBlock({ title, body }: InfoProps) {
  return (
    <div className="m-8 max-w-3/5">
      <div className="text-center font-bold text-xl mb-2 sm:text-2xl">
        {title}
      </div>
      <div className="text-base">{body}</div>
    </div>
  );
}
