import { Routes } from '@angular/router';
import { IndexComponent } from '../pages/index/index';
import { Hobbys } from '../pages/hobbys/hobbys';
import { Experience } from '../pages/experience/experience';
import { Contact } from '../pages/contact/contact';

export const routes: Routes = [
    {path: '', component: IndexComponent },
    {path: 'hobbys', component: Hobbys },
    {path: 'experience', component: Experience },
    {path: 'contact', component: Contact }
];
