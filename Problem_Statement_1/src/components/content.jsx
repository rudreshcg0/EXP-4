import "../css/content.css";
function content() {
  return (
    <section className="content">
      <h1>Welcome to the content section</h1>
      <p>This is some placeholder content for demonstration purposes.</p>
      <p>
        React lets us build user interfaces out of small, reusable components.
        Here, the Navigation and Content components are each defined in their
        own file and then composed together inside App.
      </p>
    </section>
  );
}

export default content;