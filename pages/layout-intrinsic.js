import Image from "next/image";
import { useRouter } from "next/router";
import ViewSource from "../components/view-source";

const Intrinsic = () => {
  const router = useRouter();
  const { quality, optmize } = router.query;
  return (
    <div>
      <ViewSource pathname="pages/layout-intrinsic.js" />
      <h1>Image Component With Layout Intrinsic 3</h1>
      <Image
        alt="Mountains"
        src="/mountains.jpg"
        layout="intrinsic"
        width={700}
        height={475}
        unoptimized={true}
      />
    </div>
  );
};

export default Intrinsic;
