import { Provider } from 'react-redux';
import { store } from '../state';
import { RepositoriesList } from './RepositoriesList';

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};
