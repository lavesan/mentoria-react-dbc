import { Header } from "../../components/Header";

export default function AppLayout({ children }) {
  return (
    <div className="App">
      <Header />
      {children}
    </div>
  );
}
