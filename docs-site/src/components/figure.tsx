export interface FigureProps {
  readonly src: string;
  readonly alt: string;
  readonly caption?: string;
}

export function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className="my-6 flex flex-col items-center gap-2">
      {/* Plain <img> — next/image is incompatible with output: 'export' without a loader */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="rounded-lg border border-fd-border shadow-sm max-w-full h-auto"
      />
      {caption !== undefined && caption !== '' && (
        <figcaption className="text-sm text-fd-muted-foreground text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
