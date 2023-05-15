import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./Views";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Home />
      </main>
    </QueryClientProvider>
  );
};

export default App;
