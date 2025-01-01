export default function AppFooter() {
  return (
    <footer>
      <div className="container mx-auto text-muted-foreground text-sm flex justify-between p-8">
        <p>Max Chu | Portfolio v{process.env.version}</p>
        <p className="">&copy;&nbsp;Max Chu&nbsp;{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
