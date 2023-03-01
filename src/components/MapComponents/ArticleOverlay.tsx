import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

export default function ArticleOverlay({
  setArticleOverlay,
}: {
  setArticleOverlay: Function;
}) {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center bg-white bg-opacity-90">
      <CloseIcon
        className="absolute right-12 top-12 hover:cursor-pointer"
        fontSize="large"
        onClick={() => setArticleOverlay(false)}
      />
      <div className="mx-auto flex w-4/5 flex-wrap items-center gap-12">
        <Image
          className="h-fit w-fit"
          alt="image"
          src="/photos/1_harbour.JPG"
          width={500}
          height={500}
        />
        <div className="w-[400px]">
          <h2 className="text-3xl">Title</h2>
          <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            ut enim amet numquam fuga. Voluptatibus dolore libero, totam,
            doloribus numquam delectus nam eveniet deleniti quisquam ab a
            voluptates ipsa perferendis quis molestias iusto. Sapiente officiis,
            magnam fugit cupiditate nesciunt eaque tenetur molestias.
            Perferendis accusamus, dolorem voluptatem obcaecati nostrum dolores
            nemo?
          </p>
        </div>
      </div>
    </div>
  );
}
