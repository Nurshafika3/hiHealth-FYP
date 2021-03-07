import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'health',
    loadChildren: () => import('./health/health.module').then( m => m.HealthPageModule)
  },
  {
    path: 'depression',
    loadChildren: () => import('./depression/depression.module').then( m => m.DepressionPageModule)
  },
  {
    path: 'allergy',
    loadChildren: () => import('./allergy/allergy.module').then( m => m.AllergyPageModule)
  },
  {
    path: 'breath',
    loadChildren: () => import('./breath/breath.module').then( m => m.BreathPageModule)
  },
  {
    path: 'obesity',
    loadChildren: () => import('./obesity/obesity.module').then( m => m.ObesityPageModule)
  },
  {
    path: 'eyes',
    loadChildren: () => import('./eyes/eyes.module').then( m => m.EyesPageModule)
  },
  {
    path: 'sleep',
    loadChildren: () => import('./sleep/sleep.module').then( m => m.SleepPageModule)
  },
  {
    path: 'neck',
    loadChildren: () => import('./neck/neck.module').then( m => m.NeckPageModule)
  },
  {
    path: 'asthma',
    loadChildren: () => import('./asthma/asthma.module').then( m => m.AsthmaPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'whatasthma',
    loadChildren: () => import('./whatasthma/whatasthma.module').then( m => m.WhatasthmaPageModule)
  },
  {
    path: 'ear',
    loadChildren: () => import('./ear/ear.module').then( m => m.EarPageModule)
  },
  {
    path: 'diabetes',
    loadChildren: () => import('./diabetes/diabetes.module').then( m => m.DiabetesPageModule)
  },
  {
    path: 'hemo',
    loadChildren: () => import('./hemo/hemo.module').then( m => m.HemoPageModule)
  },
  {
    path: 'hyper',
    loadChildren: () => import('./hyper/hyper.module').then( m => m.HyperPageModule)
  },
  {
    path: 'malaria',
    loadChildren: () => import('./malaria/malaria.module').then( m => m.MalariaPageModule)
  },
  {
    path: 'ocd',
    loadChildren: () => import('./ocd/ocd.module').then( m => m.OcdPageModule)
  },
  {
    path: 'elbow',
    loadChildren: () => import('./elbow/elbow.module').then( m => m.ElbowPageModule)
  },
  {
    path: 'kidney',
    loadChildren: () => import('./kidney/kidney.module').then( m => m.KidneyPageModule)
  },
  {
    path: 'salmon',
    loadChildren: () => import('./salmon/salmon.module').then( m => m.SalmonPageModule)
  },
  {
    path: 'taste',
    loadChildren: () => import('./taste/taste.module').then( m => m.TastePageModule)
  },
  {
    path: 'addison',
    loadChildren: () => import('./addison/addison.module').then( m => m.AddisonPageModule)
  },
  {
    path: 'dengue',
    loadChildren: () => import('./dengue/dengue.module').then( m => m.DenguePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'symptomasthma',
    loadChildren: () => import('./symptomasthma/symptomasthma.module').then( m => m.SymptomasthmaPageModule)
  },
  {
    path: 'solutionasthma',
    loadChildren: () => import('./solutionasthma/solutionasthma.module').then( m => m.SolutionasthmaPageModule)
  },
  {
    path: 'auasthma',
    loadChildren: () => import('./auasthma/auasthma.module').then( m => m.AuasthmaPageModule)
  },
  {
    path: 'whatdepression',
    loadChildren: () => import('./whatdepression/whatdepression.module').then( m => m.WhatdepressionPageModule)
  },
  {
    path: 'audepression',
    loadChildren: () => import('./audepression/audepression.module').then( m => m.AudepressionPageModule)
  },
  {
    path: 'symptomdepress',
    loadChildren: () => import('./symptomdepress/symptomdepress.module').then( m => m.SymptomdepressPageModule)
  },
  {
    path: 'solutiondepress',
    loadChildren: () => import('./solutiondepress/solutiondepress.module').then( m => m.SolutiondepressPageModule)
  },
  {
    path: 'whatallergy',
    loadChildren: () => import('./whatallergy/whatallergy.module').then( m => m.WhatallergyPageModule)
  },
  {
    path: 'auallergy',
    loadChildren: () => import('./auallergy/auallergy.module').then( m => m.AuallergyPageModule)
  },
  {
    path: 'symptomallergy',
    loadChildren: () => import('./symptomallergy/symptomallergy.module').then( m => m.SymptomallergyPageModule)
  },
  {
    path: 'solutionallergy',
    loadChildren: () => import('./solutionallergy/solutionallergy.module').then( m => m.SolutionallergyPageModule)
  },
  {
    path: 'whatbreath',
    loadChildren: () => import('./whatbreath/whatbreath.module').then( m => m.WhatbreathPageModule)
  },
  {
    path: 'aubreath',
    loadChildren: () => import('./aubreath/aubreath.module').then( m => m.AubreathPageModule)
  },
  {
    path: 'symptombreath',
    loadChildren: () => import('./symptombreath/symptombreath.module').then( m => m.SymptombreathPageModule)
  },
  {
    path: 'solutionbreath',
    loadChildren: () => import('./solutionbreath/solutionbreath.module').then( m => m.SolutionbreathPageModule)
  },
  {
    path: 'whatobe',
    loadChildren: () => import('./whatobe/whatobe.module').then( m => m.WhatobePageModule)
  },
  {
    path: 'auobe',
    loadChildren: () => import('./auobe/auobe.module').then( m => m.AuobePageModule)
  },
  {
    path: 'symptomobe',
    loadChildren: () => import('./symptomobe/symptomobe.module').then( m => m.SymptomobePageModule)
  },
  {
    path: 'solutionobe',
    loadChildren: () => import('./solutionobe/solutionobe.module').then( m => m.SolutionobePageModule)
  },
  {
    path: 'whateyes',
    loadChildren: () => import('./whateyes/whateyes.module').then( m => m.WhateyesPageModule)
  },
  {
    path: 'aueyes',
    loadChildren: () => import('./aueyes/aueyes.module').then( m => m.AueyesPageModule)
  },
  {
    path: 'symptomeyes',
    loadChildren: () => import('./symptomeyes/symptomeyes.module').then( m => m.SymptomeyesPageModule)
  },
  {
    path: 'solutioneyes',
    loadChildren: () => import('./solutioneyes/solutioneyes.module').then( m => m.SolutioneyesPageModule)
  },
  {
    path: 'whatsleep',
    loadChildren: () => import('./whatsleep/whatsleep.module').then( m => m.WhatsleepPageModule)
  },
  {
    path: 'ausleep',
    loadChildren: () => import('./ausleep/ausleep.module').then( m => m.AusleepPageModule)
  },
  {
    path: 'symptomsleep',
    loadChildren: () => import('./symptomsleep/symptomsleep.module').then( m => m.SymptomsleepPageModule)
  },
  {
    path: 'solutionsleep',
    loadChildren: () => import('./solutionsleep/solutionsleep.module').then( m => m.SolutionsleepPageModule)
  },
  {
    path: 'whatneck',
    loadChildren: () => import('./whatneck/whatneck.module').then( m => m.WhatneckPageModule)
  },
  {
    path: 'auneck',
    loadChildren: () => import('./auneck/auneck.module').then( m => m.AuneckPageModule)
  },
  {
    path: 'symptomneck',
    loadChildren: () => import('./symptomneck/symptomneck.module').then( m => m.SymptomneckPageModule)
  },
  {
    path: 'solutionneck',
    loadChildren: () => import('./solutionneck/solutionneck.module').then( m => m.SolutionneckPageModule)
  },
  {
    path: 'ausleep',
    loadChildren: () => import('./ausleep/ausleep.module').then( m => m.AusleepPageModule)
  },
  {
    path: 'whatear',
    loadChildren: () => import('./whatear/whatear.module').then( m => m.WhatearPageModule)
  },
  {
    path: 'auear',
    loadChildren: () => import('./auear/auear.module').then( m => m.AuearPageModule)
  },
  {
    path: 'symptomear',
    loadChildren: () => import('./symptomear/symptomear.module').then( m => m.SymptomearPageModule)
  },
  {
    path: 'solutionear',
    loadChildren: () => import('./solutionear/solutionear.module').then( m => m.SolutionearPageModule)
  },
  {
    path: 'whatdia',
    loadChildren: () => import('./whatdia/whatdia.module').then( m => m.WhatdiaPageModule)
  },
  {
    path: 'audia',
    loadChildren: () => import('./audia/audia.module').then( m => m.AudiaPageModule)
  },
  {
    path: 'symptomdia',
    loadChildren: () => import('./symptomdia/symptomdia.module').then( m => m.SymptomdiaPageModule)
  },
  {
    path: 'solutiondia',
    loadChildren: () => import('./solutiondia/solutiondia.module').then( m => m.SolutiondiaPageModule)
  },
  {
    path: 'whathemo',
    loadChildren: () => import('./whathemo/whathemo.module').then( m => m.WhathemoPageModule)
  },
  {
    path: 'auhemo',
    loadChildren: () => import('./auhemo/auhemo.module').then( m => m.AuhemoPageModule)
  },
  {
    path: 'symptomhemo',
    loadChildren: () => import('./symptomhemo/symptomhemo.module').then( m => m.SymptomhemoPageModule)
  },
  {
    path: 'solutionhemo',
    loadChildren: () => import('./solutionhemo/solutionhemo.module').then( m => m.SolutionhemoPageModule)
  },
  {
    path: 'whathyper',
    loadChildren: () => import('./whathyper/whathyper.module').then( m => m.WhathyperPageModule)
  },
  {
    path: 'auhyper',
    loadChildren: () => import('./auhyper/auhyper.module').then( m => m.AuhyperPageModule)
  },
  {
    path: 'symptomhyper',
    loadChildren: () => import('./symptomhyper/symptomhyper.module').then( m => m.SymptomhyperPageModule)
  },
  {
    path: 'solutionhyper',
    loadChildren: () => import('./solutionhyper/solutionhyper.module').then( m => m.SolutionhyperPageModule)
  },
  {
    path: 'whatmala',
    loadChildren: () => import('./whatmala/whatmala.module').then( m => m.WhatmalaPageModule)
  },
  {
    path: 'aumala',
    loadChildren: () => import('./aumala/aumala.module').then( m => m.AumalaPageModule)
  },
  {
    path: 'symptommala',
    loadChildren: () => import('./symptommala/symptommala.module').then( m => m.SymptommalaPageModule)
  },
  {
    path: 'solutionmala',
    loadChildren: () => import('./solutionmala/solutionmala.module').then( m => m.SolutionmalaPageModule)
  },
  {
    path: 'whatocd',
    loadChildren: () => import('./whatocd/whatocd.module').then( m => m.WhatocdPageModule)
  },
  {
    path: 'auocd',
    loadChildren: () => import('./auocd/auocd.module').then( m => m.AuocdPageModule)
  },
  {
    path: 'symptomocd',
    loadChildren: () => import('./symptomocd/symptomocd.module').then( m => m.SymptomocdPageModule)
  },
  {
    path: 'solutionocd',
    loadChildren: () => import('./solutionocd/solutionocd.module').then( m => m.SolutionocdPageModule)
  },
  {
    path: 'whatelbow',
    loadChildren: () => import('./whatelbow/whatelbow.module').then( m => m.WhatelbowPageModule)
  },
  {
    path: 'auelbow',
    loadChildren: () => import('./auelbow/auelbow.module').then( m => m.AuelbowPageModule)
  },
  {
    path: 'symptomelbow',
    loadChildren: () => import('./symptomelbow/symptomelbow.module').then( m => m.SymptomelbowPageModule)
  },
  {
    path: 'solutionelbow',
    loadChildren: () => import('./solutionelbow/solutionelbow.module').then( m => m.SolutionelbowPageModule)
  },
  {
    path: 'whatkidney',
    loadChildren: () => import('./whatkidney/whatkidney.module').then( m => m.WhatkidneyPageModule)
  },
  {
    path: 'aukidney',
    loadChildren: () => import('./aukidney/aukidney.module').then( m => m.AukidneyPageModule)
  },
  {
    path: 'symptomkidney',
    loadChildren: () => import('./symptomkidney/symptomkidney.module').then( m => m.SymptomkidneyPageModule)
  },
  {
    path: 'solutionkidney',
    loadChildren: () => import('./solutionkidney/solutionkidney.module').then( m => m.SolutionkidneyPageModule)
  },
  {
    path: 'whatsalmon',
    loadChildren: () => import('./whatsalmon/whatsalmon.module').then( m => m.WhatsalmonPageModule)
  },
  {
    path: 'symptomsalmon',
    loadChildren: () => import('./symptomsalmon/symptomsalmon.module').then( m => m.SymptomsalmonPageModule)
  },
  {
    path: 'solutionsalmon',
    loadChildren: () => import('./solutionsalmon/solutionsalmon.module').then( m => m.SolutionsalmonPageModule)
  },
  {
    path: 'whattaste',
    loadChildren: () => import('./whattaste/whattaste.module').then( m => m.WhattastePageModule)
  },
  {
    path: 'autaste',
    loadChildren: () => import('./autaste/autaste.module').then( m => m.AutastePageModule)
  },
  {
    path: 'symptomtaste',
    loadChildren: () => import('./symptomtaste/symptomtaste.module').then( m => m.SymptomtastePageModule)
  },
  {
    path: 'solutiontaste',
    loadChildren: () => import('./solutiontaste/solutiontaste.module').then( m => m.SolutiontastePageModule)
  },
  {
    path: 'whataddison',
    loadChildren: () => import('./whataddison/whataddison.module').then( m => m.WhataddisonPageModule)
  },
  {
    path: 'auaddison',
    loadChildren: () => import('./auaddison/auaddison.module').then( m => m.AuaddisonPageModule)
  },
  {
    path: 'symptomaddison',
    loadChildren: () => import('./symptomaddison/symptomaddison.module').then( m => m.SymptomaddisonPageModule)
  },
  {
    path: 'solutionaddison',
    loadChildren: () => import('./solutionaddison/solutionaddison.module').then( m => m.SolutionaddisonPageModule)
  },
  {
    path: 'whatdengue',
    loadChildren: () => import('./whatdengue/whatdengue.module').then( m => m.WhatdenguePageModule)
  },
  {
    path: 'audengue',
    loadChildren: () => import('./audengue/audengue.module').then( m => m.AudenguePageModule)
  },
  {
    path: 'symptomdengue',
    loadChildren: () => import('./symptomdengue/symptomdengue.module').then( m => m.SymptomdenguePageModule)
  },
  {
    path: 'solutiondengue',
    loadChildren: () => import('./solutiondengue/solutiondengue.module').then( m => m.SolutiondenguePageModule)
  },
  {
    path: 'ausalmon',
    loadChildren: () => import('./ausalmon/ausalmon.module').then( m => m.AusalmonPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'ref',
    loadChildren: () => import('./ref/ref.module').then( m => m.RefPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
