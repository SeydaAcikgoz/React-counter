import {
    Counter
} from './components';

const App = () => {
    return <div>
        <Counter 
            initialCount={0}
            step={1}
        />
    </div>
}
export default App;
