export function MainVisual() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center py-12">
      <div className="flex w-full flex-col items-center justify-center gap-12 md:flex-row-reverse md:gap-0">
        <img
          className="w-full max-w-2xl rounded-full object-contain sm:rounded-2xl md:w-3/5"
          src="/akibi_main_visual.png"
          alt="あきび祭メインビジュアル"
        />

        <img
          className="w-3/4 max-w-lg object-contain md:w-2/5"
          src="/akibi_text_logo.svg"
          alt="あきび祭テキストロゴ"
        />
      </div>
    </div>
  );
}
