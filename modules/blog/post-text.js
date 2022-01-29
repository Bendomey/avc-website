export const PostText = ({ html }) => {
  return (
    <>
      <div
        className="quillRichText"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </>
  );
};
