import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import NewContact from './pages/NewContact'
import EditContact from './pages/EditContact'
import Tabela from './pages/Tabela';
import Contato from './pages/Contato';
import Participantes from './pages/Participantes';

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/new" component={NewContact} />
            <Route path="/edit/:id" component={EditContact} />
            <Route path="/tabela" component={Tabela} />
            <Route path="/contato" component={Contato} />
            <Route path="/participantes" component={Participantes} />
        </Switch>
    )
}
