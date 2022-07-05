function Book({ book: { img, title, author } }) {
  return (
    <article className="book">
      <figure className="imageContainer">
        <img src={img} alt="Book" />
      </figure>
      <h1>{title}</h1>
      <h4>
        {author}
      </h4>
    </article>
  );
}

export default Book;
