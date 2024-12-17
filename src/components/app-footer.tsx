export default function AppFooter() {
  return (
    <footer>
      <div className="container mx-auto text-center p-8">
        <p className="text-muted-foreground text-sm">
          &copy;{new Date().getFullYear()}&nbsp;Created by Max Chu
        </p>
      </div>
    </footer>
  );
}
