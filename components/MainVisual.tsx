export function MainVisual() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center overflow-x-clip md:py-18">
      <div className="flex w-full flex-col items-center justify-center gap-12 md:flex-row-reverse md:gap-6">
        <img
          className="w-full max-w-2xl rounded-full object-contain md:w-3/5 md:rounded-2xl"
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
