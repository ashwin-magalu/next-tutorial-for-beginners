export const getStaticPaths = async () => {
  /* this won't work without getStaticProps function */
  /* creates dynamic routes */
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  const paths = data.map((d) => {
    return {
      params: { id: d.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      ashu: data,
    },
  };
};

const Details = ({ ashu }) => {
  return (
    <div>
      <h1>{ashu.name}</h1>
      <p>{ashu.email}</p>
      <p>{ashu.website}</p>
      <p>{ashu.address.city}</p>
    </div>
  );
};

export default Details;
