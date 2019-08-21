import { strings } from '../i18n';

const aboutUsCardData = [{
    title: strings('aboutUs.what_is_luzy'),
    imageData: 'about_us_what_is_luzy',
    detailImage: 'about_us_what_is_luzy_2',
    detail: 'Luzy es una plataforma tecnológica que facilita la adopción de mejores hábitos de vida.' +
        '\n\nLuzy te permite llevar un seguimiento puntual de tu salud con el objetivo de ayudarte a mejorar tu estilo de vida.' +
        '\n\nLuzy es una herramienta amigable que te permite prevenir el avance de enfermedades crónicas como la obesidad, la diabetes, entre otras enfermedades de este tipo llevándote de la mano de profesionales de la salud.'

}, {
    title: strings('aboutUs.who_we_are'),
    imageData: 'about_us_who_we_are',
    detailImage: 'about_us_who_we_are_2',
    detail: 'Somos un grupo profesional multidisciplinario que identificamos la problemática de salud actual e ideamos una herramienta para que los usuarios de Luzy puedan mejorar sus hábitos de vida de forma sencilla y amigable.\n'

}, {
    title: strings('aboutUs.our_mission'),
    imageData: 'about_us_our_mission',
    detailImage: 'about_us_our_mission_2',
    detail: 'Asesorar y apoyar a los usuarios para mejorar su calidad de vida fomentando la adopción de hábitos saludables.\n' +
        '\n' +
        'Siempre comprometidos en brindar una atención integral y en fomentar un estilo de vida sano mediante la prevención y tratamiento médico multidisciplinario, así como el uso de nuevas tecnologías buscando generar impacto en sostenibilidad y salud que permanezca en el tiempo y que a su vez se traduzca en un impacto económico favorable para los gobiernos.'

}, {
    title: strings('aboutUs.our_vision'),
    imageData: 'about_us_our_vision',
    detailImage: 'about_us_our_vision_2',
    detail: 'Ser un referente de apoyo a personas con hábitos no sanos brindando atención integral y tratamiento a diversas enfermedades como la obesidad, diabetes, entre otras por medio de nuestra plataforma.\n' +
        '\n' +
        'Luzy está sustentada por especialistas en las ramas del combate a esta problemática y tecnología innovadora con el fin de mejorar la salud integral de la población.'

}, {
    title: strings('aboutUs.our_team'),
    imageData: 'about_us_our_team',
    detailImage: 'about_us_our_team_2',
    detail: 'Fotos y nombres de los especialistas y de lo que realizan.'

}, {
    title: strings('aboutUs.contact_us'),
    imageData: 'about_us_contact_us',
    detailImage: 'about_us_contact_us_2',
}];

const ourValuesList = [
    ' Respeto',
    'Empatía',
    'Humanismo',
    'Integridad',
    'Compromiso y pasión',
    'Responsabilidad',
    'Calidad'
];

const homeCardData = [{
    title: strings("home.Monitoring"),
    imageData: 'home_monitoring',
    image: 'header_navigation_grey_monitoring',
    imageOnActive: 'header_navigation_white_monitoring',
    screen: 'Monitoring'
}, {
    title: strings("home.Food"),
    imageData: 'home_food',
    image: 'header_navigation_white_food',
    screen: 'Foods'
}, {
    title: strings("home.Fitness"),
    imageData: 'home_fitness',
    image: 'header_navigation_grey_fitness',
    imageOnActive: 'header_navigation_white_fitness',
    screen:'Fitness'
}, {
    title: strings("home.Health"),
    imageData: 'home_health',
    image: 'header_navigation_white_health',
    screen:'Health'
}, {
    title: strings("home.Free Time"),
    imageData: 'home_free_time',
    image: 'header_navigation_grey_free_time',
    imageOnActive: 'header_navigation_white_free_time',
    screen:'FreeTime'
}, {
    title: strings("home.Play"),
    imageData: 'home_play',
    image: 'header_navigation_white_play',
    screen:'Play'
}];

const foodCardData = [{
    title: strings("food.prepareFood"),
    image: 'prepare_your_food',
    screen: 'PrepareYourFood'
}, {
    title: strings("food.caloriesTable"),
    image: 'calorie_table',
    screen: 'CalorieTable'
},];

const calorieTableCardData = [{
    title: strings("calorieTable.recommendedFood"),
    image: 'recommended_food_icon',
    screen: 'RecommendedFood'
}, {
    title: strings("calorieTable.nonRecommendedFood"),
    image: 'not_recommended_food_icon',
    screen: 'NotRecommendedFood'
}];

const prepareYourFoodCardData = [{
    title: strings("prepareFood.videoRecipe"),
    image: 'prepare_your_food_video_recipes',
    screen: 'VideoRecipe'
}, {
    title: strings("prepareFood.recipeBook"),
    image: 'prepare_your_food_book_recipes',
    screen: 'RecipeBook'
},];

const  healthAppointmentsCardData= [{
    title: strings("homedetail.makeanAppointment"),
    image: 'health_make_appointment',
    screen: 'Appointment'
}, {
    title: strings("appointment.next_appointment"),
    image: 'health_next_appointment',
    screen: 'AppointmentHistory'
},];
const videoRecipeCardData = [];

const ingredientsList=[
    strings("ingredients.porkmeat"), strings("ingredients.onion"), strings("ingredients.broccoli"), strings("ingredients.cheese"), strings("ingredients.egg"), strings("ingredients.milk")
];

const typeOfExerciseList = [
    strings("exerciseType.warm_up"),
    strings("exerciseType.functional"),
    strings("exerciseType.pregnancy"),
    strings("exerciseType.weight"),
    strings("exerciseType.yoga"),
    strings("exerciseType.stretching")
];

const bodyPartsList = [
    'Gluteos',
    'Pantorrillas',
    'Cuadriceps',
    'Femorales',
    'TrÌceps',
    'BÌceps',
    'Abdomen Alto',
    'Abdomen Bajo',
    'Oblicuos',
    'Hombro central',
    'Hombro Frontal',
    'Hombro Trasero',
    'Cuerpo Completo',
];

const ageRangeList=[
    '18-25', '26-39', '40+'
];

const daysList = [
    strings("days.Monday"), strings("days.Friday"), strings("days.Tuesday"), strings("days.Saturday"), strings("days.Wednesday"), strings("days.Sunday"), strings("days.Thursday"), strings("days.EveryDay")
];

const monitoringCardData = [{
    title: strings("homedetail.glucoseMonitoring"),
    image: 'monitoring_small_glucose_monitoring',
    screen: 'GlucoseHome'
}, {
    title: strings("homedetail.bloodPresssure"),
    image: 'monitoring_small_blood_pressure',
    screen:'BloodPressure'
}, {
    title: strings("homedetail.BMICalculator"),
    image: 'monitoring_small_bmi_calculator',
    screen:'BMICalculator'
}, {
    title: strings("homedetail.caloriesCalculator"),
    image: 'monitoring_small_calories_calculator',
    screen: 'CalorieCalculator'
}, {
    title: strings("homedetail.Reminders"),
    image: 'monitoring_small_reminders',
    screen: 'Reminders'
}, {
    title: strings("homedetail.makeanAppointment"),
    image: 'monitoring_small_make_an_appointment',
    screen: 'Appointment'
}];

const glucoseCardData = [{
    title: strings("glucoseCardDetail.morningFasting"),
    image: 'glucose_morning_fasting',
    screen: 'MorningFastingHome'
}, {
    title: strings("glucoseCardDetail.twoHoursAfterFood"),
    image: 'glucose_2_hours_after_food',
    screen: 'TwoHoursAfterFoodHome'
}];

const freeTimeCardData = [{
    title: strings("freeTime.meditation"),
    image: 'free_time_meditations_small',
    screen: 'Meditation'
}, {
    title: strings("freeTime.pedometer"),
    image: 'free_time_pedometer_small',
    screen: 'Pedometer'
}];

const tabBarBeforeLogin = [{
    title: strings("tab.back"),
    imageData: 'footer_back_icon',
    activeImageData:'footer_back_selected_icon',
    screen: 'Back'
}, {
    title: strings("tab.help"),
    imageData: 'footer_help_icon',
    activeImageData:'footer_help_selected_icon',
    screen: 'Help'
}, {
    title: strings("tab.contact"),
    imageData: 'footer_contact_icon',
    activeImageData:'footer_contact_selected_icon',
    screen: 'Contact'
}, {
    title: strings("tab.login"),
    imageData: 'footer_login_icon',
    activeImageData:'footer_login_selected_icon',
    screen: 'Back'
}];

const tabBarAfterLogin = [{
    title: strings("tab.Home"),
    imageData: 'footer_home_icon',
    activeImageData:'footer_home_selected_icon',
    screen: 'Home'
}, {
    title: strings("tab.Social"),
    imageData: 'footer_social_icon',
    activeImageData:'footer_social_selected_icon',
    screen: 'Social'
}, {
    title: strings("tab.User"),
    imageData: 'footer_user_icon',
    activeImageData:'footer_user_selected_icon',
    screen:'User'
}, {
    title: strings("tab.Progress"),
    imageData: 'footer_progress_icon',
    activeImageData:'footer_progress_selected_icon',
    screen: 'Progress'
}];

const tabBarWithBack = [{
    title: strings("tab.back"),
    imageData: 'footer_back_icon',
    activeImageData:'',
    screen: 'Back'
}, {
    title: strings("tab.Social"),
    imageData: 'footer_social_icon',
    activeImageData:'footer_social_selected_icon',
    screen: 'Social'
}, {
    title: strings("tab.User"),
    imageData: 'footer_user_icon',
    activeImageData:'footer_user_selected_icon',
    screen:'User'
}, {
    title: strings("tab.Progress"),
    imageData: 'footer_progress_icon',
    activeImageData:'footer_progress_selected_icon',
    screen: 'Progress'
}];

const teamData = [{
    title: 'JOAQUIN LEAL',
    subTitle: 'CEO LUZY',
    detail: 'Soy un emprendedor mexicano convencido en crear herramientas tecnológicas de bajo costo y facil acceso que generen bienestar y solucionen problemas cotidianos con los que todos nos enfrentamos. Asi es como nace Luzy.'
}, {
    title: 'JOAQUIN LEAL 2 ',
    subTitle: 'CEO LUZY',
    detail: 'Morbi hendrerit lacus id efficitur tristique.Morbi hendrerit lacus id efficitur tristique.Morbi hendrerit lacus id efficitur tristique.'
}, {
    title: 'JOAQUIN LEAL 3',
    subTitle: 'CEO LUZY',
    detail: 'Morbi hendrerit lacus id efficitur tristique.Morbi hendrerit lacus id efficitur tristique.Morbi hendrerit lacus id efficitur tristique.'
}, {
    title: 'JOAQUIN LEAL 4',
    subTitle: 'CEO LUZY',
    detail: 'Morbi hendrerit lacus id efficitur tristique.Morbi hendrerit lacus id efficitur tristique.Morbi hendrerit lacus id efficitur tristique.Morbi hendrerit lacus id efficitur tristique\n' +
        'Morbi hendrerit lacus id efficitur tristiqueMorbi hendrerit lacus id efficitur tristique'
}];

const RecommendedFoodList = [{
    type: 'Vegetables',
    imageSmall: 'vegetables_icon_small',
    imageBig: 'vegetables_icon_big',
    detail: [{
        name: 'Cooked Bean',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }, {
        name: 'Bean',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$55,00'
    }, {
        name: 'Pizza de queso corteza normal rebanada mediana',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }, {
        name: 'Dry Bean',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }]
}, {
    type: 'Cereales',
    imageSmall: 'cereals_icon_small',
    imageBig: 'cereals_icon_big',
    detail: [{
        name: 'Bean',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$55,00'
    }, {
        name: 'Chickpea',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }, {
        name: 'Pizza de queso corteza normal rebanada mediana',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }, {
        name: 'Pizza de queso corteza normal rebanada mediana',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }]
}, {
    type: 'Oils without protein',
    imageSmall: 'oils_without_protein_icon_small',
    imageBig: 'oils_without_protein_icon_big',
    detail: [{
        name: 'Pizza de queso corteza normal rebanada mediana',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }, {
        name: 'Bean',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$55,00'
    }]
}, {
    type: 'Oils and fats with protein',
    imageSmall: 'oils_and_fats_with_protein_icon_small',
    imageBig: 'oils_and_fats_with_protein_icon_big',
    detail: [{
        name: 'Hummus',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }, {
        name: 'Pizza de queso corteza normal rebanada mediana',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }, {
        name: 'Dry Bean',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }]
}, {
    type: 'Fruits',
    imageSmall: 'fruits_icon_small',
    imageBig: 'fruits_icon_big',
    detail: [{
        name: 'Chickpea',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }, {
        name: 'Bean',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$55,00'
    }, {
        name: 'Pizza de queso corteza normal rebanada mediana',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }, {
        name: 'Dry Bean',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }, {
        name: 'Cooked Bean',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }]
}, {
    type: 'Foods of animal origin',
    imageSmall: 'food_of_animal_origin_icon_small',
    imageBig: 'food_of_animal_origin_icon_big',
    detail: [{
        name: 'Pizza de queso corteza normal rebanada mediana',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }, {
        name: 'Bean',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$55,00'
    }, {
        name: 'Pizza de queso corteza normal rebanada mediana',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }]
}, {
    type: 'Legumes',
    imageSmall: 'legumes_icon_small',
    imageBig: 'legumes_icon_big',
    detail: [{
        name: 'Pizza de queso corteza normal rebanada mediana',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }, {
        name: 'Bean',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$55,00'
    }, {
        name: 'Pizza de queso corteza normal rebanada mediana',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }, {
        name: 'Pizza de queso corteza normal rebanada mediana',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }]
}];

const NotRecommendedFoodList = [{
    type: 'Fast food',
    imageSmall: 'fast_food_icon_small',
    imageBig: 'fast_food_icon_big',
    detail: [{
        name: 'Pizza de queso corteza normal rebanada mediana',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }, {
        name: 'Bean',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$55,00'
    }, {
        name: 'Pizza de queso corteza normal rebanada mediana',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }, {
        name: 'Pizza de queso corteza normal rebanada mediana',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }, {
        name: 'Pizza de queso corteza normal rebanada mediana',
        quantity: '1/2 cup',
        calorie: '120 kcal',
        price: '$146,00'
    }]
    }, {
        type: 'Food of animal origin',
        imageSmall: 'food_of_animal_icon_small',
        imageBig: 'food_of_animal_icon_big',
        detail: [{
            name: 'Pizza de queso corteza normal rebanada mediana',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$146,00'
        }, {
            name: 'Dry Bean',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$55,00'
        }, {
            name: 'Pizza de queso corteza normal rebanada mediana',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$146,00'
        }]
    }, {
        type: 'Fats',
        imageSmall: 'fats_icon_small',
        imageBig: 'fats_icon_big',
        detail: [{
            name: 'Dry Bean',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$55,00'
        }, {
            name: 'Dry Bean',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$55,00'
        }, {
            name: 'Pizza de queso corteza normal rebanada mediana',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$146,00'
        }]
    }, {
        type: 'Drinks with sugar',
        imageSmall: 'drinks_with_sugar_icon_small',
        imageBig: 'drinks_with_sugar_icon_big',
        detail: [{
            name: 'Dry Bean',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$55,00'
        }, {
            name: 'Dry Bean',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$55,00'
        }, {
            name: 'Pizza de queso corteza normal rebanada mediana',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$146,00'
        }]
    }, {
        type: 'Alcohol',
        imageSmall: 'alcohol_icon_small',
        imageBig: 'alcohol_icon_big',
        detail: [{
            name: 'Bean',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$55,00'
        },{
            name: 'Pizza de queso corteza normal rebanada mediana',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$146,00'
        },{
            name: 'Dry Bean',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$55,00'
        }, {
            name: 'Pizza de queso corteza normal rebanada mediana',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$146,00'
        }, {
            name: 'Pizza de queso corteza normal rebanada mediana',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$146,00'
        }]
    }, {
        type: 'Milk with sugar',
        imageSmall: 'milk_with_sugar_icon_small',
        imageBig: 'milk_with_sugar_icon_big',
        detail: [{
            name: 'Pizza de queso corteza normal rebanada mediana',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$146,00'
        },{
            name: 'Dry Bean',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$55,00'
        }, {
            name: 'Pizza de queso corteza normal rebanada mediana',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$146,00'
        }, {
            name: 'Pizza de queso corteza normal rebanada mediana',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$146,00'
        }]
    }, {
        type: 'Sugar',
        imageSmall: 'sugar_icon_small',
        imageBig: 'sugar_icon_big',
        detail: [{
            name: 'Dry Bean',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$55,00'
        }, {
            name: 'Pizza de queso corteza normal rebanada mediana',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$146,00'
        }, {
            name: 'Pizza de queso corteza normal rebanada mediana',
            quantity: '1/2 cup',
            calorie: '120 kcal',
            price: '$146,00'
        }]
}];

const ExerciseCard = [{
    type: 'Upper body:',
    name: 'Biceps Exercise 1',
    time: '10 minutes-Easy',
    imageData: 'app_big_blue_background'
}, {
    type: 'Upper body:',
    name: 'Biceps Exercise 2',
    time: '10 minutes-Medium',
    imageData: 'app_big_blue_background'
}];

const meditationAudioList = [{
    imageData: 'img_placeholder',
    name: 'Gratitude',
    time: '5 minutes',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
}, {
    imageData: 'img_placeholder',
    name: 'Calming Anxiety',
    time: '10 minutes',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3'
}, {
    imageData: 'img_placeholder',
    name: 'Easy Sleep',
    time: '10 minutes',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3'
}];

const healthData = [{
    title: strings('health.appointments'),
    image: 'health_small_appointments',
    screen: 'AppointmentHome'
}, {
    title: strings('health.medical_notes'),
    image: 'health_medical_notes',
    screen:'MedicalNotes'
}, {
    title: strings('health.health_calculator'),
    image: 'health_health_calculator',
    screen:'HealthCalculator'
}];

const rememberMe = 'rememberMe';
const user = 'User';

const menuItems = [
    {
        title: strings("mainMenu.home"),
        image: 'main_menu_home_icon',
    }, {
        title: strings("mainMenu.user"),
        image: 'main_menu_user_icon',
    }, {
        title: strings("mainMenu.progress"),
        image: 'main_menu_progress_icon',
    }, {
        title: strings("mainMenu.settings"),
        image: 'main_menu_settings_icon',
    }, {
        title: strings("mainMenu.balance"),
        image: 'main_menu_balance_icon',
    }, {
        title: strings("mainMenu.about"),
        image: 'main_menu_about_us_icon',
    }, {
        title: strings("mainMenu.contact"),
        image: 'main_menu_contact_icon',
    }, {
        title: strings("mainMenu.invite_friend"),
        image: 'main_menu_invite_a_friend_icon',
    }, {
        title: strings("mainMenu.logout"),
        image: 'main_menu_logout_icon',
    }, {
        title: strings("mainMenu.exit"),
        image: 'main_menu_exit_icon',
        activity: 'this.onExit()'
    }
];

const menuItemsBeforeLogin = [
    {
        title: strings("mainMenu.about"),
        image: 'main_menu_about_us_icon',
    }, {
        title: strings("mainMenu.contact"),
        image: 'main_menu_contact_icon',
    }, {
        title: strings("mainMenu.login"),
        image: 'main_menu_login_icon',
    }, {
        title: strings("mainMenu.exit"),
        image: 'main_menu_exit_icon',
        activity: 'this.onExit()'
    }
];

const termsOfUseText = 'LUZY TECHNOLOGIES LLC, (“Luzy”) hace de su conocimiento que en virtud de la relación que usted tiene como proveedor de bienes o servicios a Luzy o cualquiera de sus subsidiarias o afiliadas, Luzy realiza perfiles informativos que le permiten identificar, contactar y remunerarle, así como cumplir los demás derechos y obligaciones derivados de su relación con Luzy, para lo cual recolecta, mantiene y actualiza su información personal (los “Datos”), misma que integra a bases de datos corporativas únicamente para los efectos anteriormente descritos. \n' +
    'Los Datos en todo momento serán tratados con apego a los principios y requisitos contenidos en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (la “Ley”).\n' +
    'Luzy tiene su domicilio en Av corregidores 210, Virreyes, Ciudad de México, CP 11000 y es el responsable de la recolección, resguardo y tratamiento de los Datos. Usted podrá en todo momento ejercer sus derechos de acceso, rectificación, cancelación u oposición de sus Datos mediante correo electrónico enviado a *@*.com. Asimismo usted podrá solicitar la limitación del uso o divulgación de sus Datos dirigiendo su escrito correspondiente a la dirección anteriormente citada. Toda solicitud de ejercicio de los derechos descritos deberá cumplir los requisitos contenidos en la Ley y será resuelta en los plazos y bajo los términos que la Ley señale. Asimismo usted podrá solicitar la limitación del uso o divulgación de sus Datos dirigiendo su escrito correspondiente a la dirección anteriormente citada.\n' +
    'Luzy mantendrá los mecanismos de protección adecuados, y que se adhieran a las normas de la industria, para garantizar la seguridad, integridad y privacidad de los Datos. Luzy podrá transferir los Datos a sus afiliadas y subsidiarias quienes se atendrán a lo establecido en el presente aviso de privacidad. \n' +
    'Cualquier cambio al alcance de este aviso de privacidad le será informado por Luzy por este mismo conducto.\n' +
    'La ausencia de manifestación contraria al contenido del presente aviso representa su consentimiento al tratamiento de sus Datos por Luzy en los términos aquí contenidos. Usted podrá solicitar, en cualquier momento, la cancelación del consentimiento aquí otorgado mediante escrito elaborado en los mismos términos y dirigido a la misma dirección electrónica que se señala en el párrafo tercero de este aviso. Luzy atenderá tal solicitud en un plazo no mayor a 20 días y le comunicará la respuesta correspondiente por escrito entregado en la dirección personal que usted señale en su solicitud.'


module.exports = {
    aboutUsCardData,
    ourValuesList,
    homeCardData,
    monitoringCardData,
    foodCardData,
    prepareYourFoodCardData,
    videoRecipeCardData,
    tabBarBeforeLogin,
    tabBarAfterLogin,
    tabBarWithBack,
    teamData,
    glucoseCardData,
    RecommendedFoodList,
    NotRecommendedFoodList,
    calorieTableCardData,
    ingredientsList,
    ExerciseCard,
    typeOfExerciseList,
    bodyPartsList,
    ageRangeList,
    daysList,
    freeTimeCardData,
    meditationAudioList,
    healthData,
    rememberMe,
    user,
    healthAppointmentsCardData,
    menuItems,
    menuItemsBeforeLogin,
    termsOfUseText
};