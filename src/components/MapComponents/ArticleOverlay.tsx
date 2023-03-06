import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

interface articleOverlayProps {
  title: string;
  description?: string;
  img_src: string;
  img_alt: string;
}

export default function ArticleOverlay({
  articleOverlay,
  setArticleOverlay,
}: {
  articleOverlay: articleOverlayProps;
  setArticleOverlay: Function;
}) {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-white bg-opacity-90">
      <CloseIcon
        className="absolute right-12 top-12 hover:cursor-pointer"
        fontSize="large"
        onClick={() => setArticleOverlay(false)}
      />
      <div className="mx-auto flex h-fit w-auto flex-wrap items-center justify-center gap-12">
        <Image
          className="max-h-[80vh] w-auto flex-initial object-contain"
          src={"/photos/" + articleOverlay.img_src ?? "/photos/1_harbour.JPG"}
          alt={articleOverlay?.img_alt ?? "article overlay image"}
          width={500}
          height={500}
        />
        <div className="max-w-[50ch] flex-auto">
          <h2 className="text-3xl">{articleOverlay.title ?? "Title"}</h2>
          <p className="mt-8">
            {articleOverlay.description ??
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ut enim amet numquam fuga. Voluptatibus dolore libero, totam, doloribus numquam delectus nam eveniet deleniti quisquam ab a voluptates ipsa perferendis quis molestias iusto. Sapiente officiis, magnam fugit cupiditate nesciunt eaque tenetur molestias. Perferendis accusamus, dolorem voluptatem obcaecati nostrum dolores nemo?"}
          </p>
        </div>
      </div>
    </div>
  );
}
