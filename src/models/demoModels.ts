import 'dotenv/config';

export class DemoModel {
    data : string[] = ['Maxime','thibaut','Florian']

    goToController = () => {
        return this.data
    }
}