import { withSSRAuth } from '../../utils/auth/withSSRAuth';
import Main from '../../components/Main/Main';


const Agenda = () => {
    return (
        <div>
            {/* <Head> */}
            <title>Agenda</title>
            {/* </Head> */}


            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Agenda</h1>
                </div>
            </header>

            <main>
                <Main>
                    <></>
                </Main>
            </main>
        </div>
    );
};

export default Agenda;