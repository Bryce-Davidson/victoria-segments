import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

interface articleOverlayProps {
  title: string;
  description?: string;
  imgSrc: string;
  imgAlt: string;
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
      <div className="mx-auto flex h-2/3 w-4/5 flex-wrap items-center justify-center gap-12">
        <Image
          className="h-96 w-fit"
          src={"/photos/" + articleOverlay.imgSrc ?? "/photos/1_harbour.JPG"}
          alt={articleOverlay.imgAlt ?? "article overlay image"}
          width={500}
          height={500}
        />
        <div className="w-[400px]">
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
