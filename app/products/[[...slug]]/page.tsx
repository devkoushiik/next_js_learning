interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProdutcSlugs = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      ProdutcSlugs {slug}
      {sortOrder}
    </div>
  );
};
export default ProdutcSlugs;
