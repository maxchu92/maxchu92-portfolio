export default function SectionHeader(props: { title: string }) {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-purple-500">
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-4xl md:text-6xl text-background text-center">
          {props.title}
        </h2>
      </div>
    </div>
  );
}
