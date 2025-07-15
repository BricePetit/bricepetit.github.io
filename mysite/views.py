"""
This module is the main view for the website.
"""
__title__: str = "views"
__version__: str = "1.0.0"
__author__: str = "Brice Petit"
__license__: str = "MIT"

# Imports standard libraries.

# Imports third party libraries.
from django.shortcuts import redirect, render
from django.utils.translation import gettext as _

# Imports from src.

def home(request):
    """
    Home page view with a welcome message and introduction.

    :param request:     The HTTP request object.

    :return:            Rendered home page with a welcome message and introduction.
    """
    return render(
        request,
        'home.html',
        {
            'title': _('Brice Petit - Home page'),
            'content': _('Welcome to the home page.'),
        }
    )


def skills(request):
    """
    Skills and expertise view with detailed programming languages, frameworks, tools,
    and domains of expertise.

    :param request:     The HTTP request object.

    :return:            Rendered skills page with detailed programming languages, frameworks,
                        tools, and domains of expertise.
    """
    # Programming languages with levels.
    programming_languages = {
        _('Python'): {'level': _('Advanced'), 'description': _('Main language for ML and DL, data science and web development')},
        _('C++'): {'level': _('Intermediate'), 'description': _('Code optimization and climate simulation')},
        _('Java'): {'level': _('Intermediate'), 'description': _('Object-oriented development and enterprise applications')},
        _('R'): {'level': _('Intermediate'), 'description': _('Statistical analysis and data science')},
        _('Fortran'): {'level': _('Beginner'), 'description': _('Legacy code and scientific simulations')},
    }
    # ML/DL Frameworks.
    ml_frameworks = {
        _('TensorFlow'): {'level': _('Advanced'), 'description': _('Deep learning and neural networks')},
        _('PyTorch'): {'level': _('Advanced'), 'description': _('Deep learning research and prototyping')},
        _('Scikit-learn'): {'level': _('Advanced'), 'description': _('Classical machine learning and preprocessing')},
        _('XGBoost'): {'level': _('Advanced'), 'description': _('Gradient boosting for time series and prediction')},
    }
    # Data Science Tools.
    data_tools = {
        _('Jupyter'): {'level': _('Advanced'), 'description': _('Interactive development and prototyping')},
        _('Pandas'): {'level': _('Advanced'), 'description': _('Data manipulation and analysis')},
        _('NumPy'): {'level': _('Advanced'), 'description': _('Numerical computing and linear algebra')},
        _('Matplotlib'): {'level': _('Advanced'), 'description': _('Static data visualization')},
        _('Seaborn'): {'level': _('Advanced'), 'description': _('Statistical visualization')},
        _('Plotly'): {'level': _('Intermediate'), 'description': _('Interactive visualizations')},
    }
    # Databases.
    databases = {
        _('MySQL'): {'level': _('Intermediate'), 'description': _('Relational database')},
        _('Cassandra'): {'level': _('Advanced'), 'description': _('NoSQL for big data and IoT')},
    }
    # DevOps & Tools.
    devops_tools = {
        _('Docker'): {'level': _('Intermediate'), 'description': _('Containerization and deployment')},
        _('Git'): {'level': _('Advanced'), 'description': _('Version control and collaboration')},
    }
    # Expertise domains.
    expertise_domains = {
        _('Supervised Machine Learning'): {'level': _('Advanced'), 'description': _('Classification, regression, optimization')},
        _('Time Series Analysis'): {'level': _('Advanced'), 'description': _('Time analysis techniques, trend and seasonality detection')},
        _('Energy Forecasting'): {'level': _('Advanced'), 'description': _('Energy consumption and production prediction in business context')},
        _('Energy Communities'): {'level': _('Advanced'), 'description': _('Distribution keys, community optimization')},
        _('Energy Optimization'): {'level': _('Advanced'), 'description': _('Production vs consumption, smart grids')},
    }
    # Languages.
    languages = {
        _('French'): {'level': _('Native'), 'description': _('Mother tongue')},
        _('English'): {'level': _('C1'), 'description': _('Professional and academic')},
        _('Dutch'): {'level': _('B1'), 'description': _('Conversational')},
    }
    # Featured projects.
    featured_projects = [
        {
            'name': 'RenewgyParser',
            'url': 'https://github.com/BricePetit/RenewgyParser',
            'description': _('Data parser for Renewgy company'),
            'tech': ['Python', _('Data Processing')]
        },
        {
            'name': 'HW-PiCollector',
            'url': 'https://github.com/BricePetit/HW-PiCollector',
            'description': _('Data collection via smart meters with Raspberry Pi and Cassandra'),
            'tech': ['Python', 'IoT', 'Cassandra', 'Raspberry Pi']
        },
        {
            'name': 'AIEG Forecasting',
            'url': 'https://github.com/BricePetit/AIEG_Forecasting',
            'description': _('Energy consumption and production prediction'),
            'tech': ['Python', 'TensorFlow', _('Time Series')]
        },
        {
            'name': 'VdE Interface',
            'url': 'https://github.com/BricePetit/VdE_interface',
            'description': _('Web interface for energy communities'),
            'tech': ['Django', _('Web Development'), _('Data Visualization')]
        },
        {
            'name': 'VdE NILM',
            'url': 'https://github.com/BricePetit/VdE_NILM',
            'description': _('Research on electrical data disaggregation (abandoned due to funding issues)'),
            'tech': ['Python', _('Machine Learning'), _('Signal Processing')]
        },
        {
            'name': _('Voisin d\'Énergie Database'),
            'url': 'https://github.com/AlexandreHnf/Voisin-d-energie-ULB',
            'description': _('Cassandra database for the Voisins d\'Énergie project'),
            'tech': ['Cassandra', _('Database Design'), _('Energy Data')]
        },
        {
            'name': 'BernSCM Climate Model',
            'url': 'https://github.com/BricePetit/BernSCM_OO_Procedural',
            'description': _('Conversion of a Fortran climate model to Python and C++ (procedural and object-oriented)'),
            'tech': ['Python', 'C++', 'Fortran', _('Climate Modeling')]
        },
        {
            'name': _('Smart Waste Classification'),
            'url': 'https://github.com/BricePetit/ULB-INFO-F308-G5-1920/blob/master/INFO-G5-presentation.pdf',
            'description': _('Smart waste bins with automatic waste classification using AI'),
            'tech': ['Python', _('Computer Vision'), 'Raspberry Pi', 'IoT']
        }
    ]
    # Skill levels explanation.
    skill_levels_explanation = {
        _('Expert/Advanced'): _('More than 2 years of experience, complex professional projects, deep mastery'),
        _('Intermediate'): _('1-2 years of experience, academic/personal projects, good understanding'),
        _('Beginner'): _('Less than 1 year, recent learning, basic knowledge'),
        _('Native'): _('Mother tongue'),
        _('C1'): _('Professional and academic level'),
        _('B1'): _('Conversational level')
    }
    return render(
        request,
        'skills.html',
        {
            'title': _('Brice Petit - Skills & Expertise'),
            'programming_languages': programming_languages,
            'ml_frameworks': ml_frameworks,
            'data_tools': data_tools,
            'databases': databases,
            'devops_tools': devops_tools,
            'expertise_domains': expertise_domains,
            'languages': languages,
            'featured_projects': featured_projects,
            'skill_levels_explanation': skill_levels_explanation,
        }
    )


def academic(request):
    """
    Academic profile view with detailed work experiences and education timeline.
    
    :param request:     The HTTP request object.

    :return:            Rendered academic profile page with detailed work experiences and education
                        timeline.
    """
    publications = {
        _('TODO') : _('PAPER TYPE')
    }
    courses = {
        _('Université Libre de Bruxelles - INFO-H402 - Computing project') : _('Project'),
        _('Université Libre de Bruxelles - INFO-S2001 - Informatique') : _('Project'),
        _('Université Libre de Bruxelles - TRAN-H201 - Projet multidisciplinaire II et gestion de projet') : _('Project'),
    }
    return render(
        request,
        'academic.html',
        {
            'title': _('Brice Petit - Academic Profile'),
            'content': _('Welcome to the academic page.'),
            'publications' : publications,
            'courses' : courses
        }
    )


def education(request):
    """
    Education and work experience view with detailed information.

    :param request:     The HTTP request object.

    :return:            Rendered education and work experience page with detailed information.
    """
    # Structure of work experiences with more details.
    work_experiences = [
        {
            'period': _('2022 - Present'),
            'duration': _('3+ years'),
            'job_title': _('PhD Student & Research Assistant'),
            'company': 'IRIDIA - ULB',
            'location': _('Brussels, Belgium'),
            'contract_type': _('Full-time'),
            'context': _('FARI & AIEG Collaboration'),
            'responsibilities': [
                _('Research in artificial intelligence applied to energy'),
                _('Teaching assistant in computer science'),
                _('Development of machine learning algorithms'),
                _('Student supervision and research projects')
            ],
            'achievements': [
                _('Development of energy prediction models (XGBoost, CNN, LSTM)'),
                _('Data collection from 100+ households via IoT'),
                _('Creation of NoSQL database (Cassandra) for big data'),
                _('Django web interface for energy data visualization')
            ],
            'tech_stack': ['Python', 'TensorFlow', 'PyTorch', 'XGBoost', 'Cassandra', 'Django', 'Raspberry Pi'],
            'is_current': True
        },
        {
            'period': _('2022 - Present'),
            'duration': _('3+ years'),
            'job_title': _('Youth Movement Coordinator'),
            'company': _('Youth Movement'),
            'location': _('France'),
            'contract_type': _('Volunteer'),
            'context': _('Social engagement and youth development'),
            'responsibilities': [
                _('Coordination and supervision of youth activities'),
                _('Event organization and management'),
                _('Team leadership and volunteer coordination')
            ],
            'achievements': [
                _('Successful organization of camps and activities'),
                _('Building strong relationships with young people'),
                _('Strengthening leadership and pedagogical skills')
            ],
            'tech_stack': [],
            'is_current': True
        },
        {
            'period': '2021 - 2022',
            'duration': _('1 year'),
            'job_title': _('Server'),
            'company': 'Moeder Lambic Original',
            'location': _('Brussels, Belgium'),
            'contract_type': _('Student job'),
            'context': _('Customer service in specialized beer bar'),
            'responsibilities': [
                _('Customer service in French, English, Dutch'),
                _('Craft beer consulting'),
                _('Cash register and order management')
            ],
            'achievements': [
                _('Development of language skills'),
                _('Excellence in customer service'),
                _('Stress management in dynamic environment')
            ],
            'tech_stack': [],
            'is_current': False
        },
        {
            'period': '2017 - 2021',
            'duration': _('4 years'),
            'job_title': _('Crew Member'),
            'company': "McDonald's Belgium",
            'location': _('Brussels, Belgium'),
            'contract_type': _('Student job'),
            'context': _('Fast food during studies'),
            'responsibilities': [
                _('Multilingual customer service'),
                _('Order preparation'),
                _('Teamwork under pressure')
            ],
            'achievements': [
                _('Flexibility and adaptation'),
                _('Time management skills'),
                _('Team spirit development')
            ],
            'tech_stack': [],
            'is_current': False
        },
        {
            'period': '2014 - 2017',
            'duration': _('3 years'),
            'job_title': _('Assistant'),
            'company': 'Gevers',
            'location': _('Machelen, Belgium'),
            'contract_type': _('Student job'),
            'context': _('Intellectual property firm'),
            'responsibilities': [
                _('Administrative support'),
                _('Document filing'),
                _('Team assistance')
            ],
            'achievements': [
                _('Introduction to professional world'),
                _('Rigor and organization'),
                _('First contact with corporate environment')
            ],
            'tech_stack': [],
            'is_current': False
        }
    ]
    # Education structure with more details.
    education_timeline = [
        {
            'period': _('2022 - Present'),
            'duration': _('3+ years'),
            'degree': _('PhD in Engineering Sciences'),
            'institution': 'IRIDIA - ULB',
            'location': _('Brussels, Belgium'),
            'specialization': _('Artificial Intelligence & Energy'),
            'collaboration': _('FARI & AIEG'),
            'focus_areas': [
                _('Machine Learning applied to energy'),
                _('Electrical consumption prediction'),
                _('Energy community optimization'),
                _('Time series analysis')
            ],
            'status': _('In progress'),
            'is_current': True
        },
        {
            'period': '2020 - 2022',
            'duration': _('2 years'),
            'degree': _('Master in Computer Science'),
            'institution': _('Université Libre de Bruxelles'),
            'location': _('Brussels, Belgium'),
            'specialization': _('Artificial Intelligence & embedded systems'),
            'collaboration': '',
            'focus_areas': [
                _('Machine Learning & Deep Learning'),
                _('Advanced algorithms'),
                _('Distributed systems'),
                _('AI thesis project')
            ],
            'status': _('Graduated'),
            'is_current': False
        },
        {
            'period': '2016 - 2020',
            'duration': _('4 years'),
            'degree': _('Bachelor in Computer Science'),
            'institution': _('Université Libre de Bruxelles'),
            'location': _('Brussels, Belgium'),
            'specialization': _('General Computer Science'),
            'collaboration': '',
            'focus_areas': [
                _('Programming (Java, C++, Python)'),
                _('Applied mathematics'),
                _('Data structures and algorithms'),
                _('Databases and systems')
            ],
            'status': _('Graduated'),
            'is_current': False
        }
    ]
    return render(
        request,
        'education.html',
        {
            'title': _('Brice Petit - Education & Experience'),
            'work_experiences': work_experiences,
            'education_timeline': education_timeline,
        }
    )


def custom_404_view(request, exception):
    """
    Page 404 handler for custom error view.
    This view is used when a page is not found.

    :param request:     The HTTP request object.
    :param exception:   The exception that triggered the 404.

    :return:            Rendered 404 page with custom title.
    """
    return render(
        request,
        '404.html',
        {
            'title': _('Page Not Found - Brice Petit'),
        },
        status=404
    )


def test_404_view(request):
    """
    View for testing the 404 page in DEBUG mode.

    :param request:     The HTTP request object.

    :return:            Rendered 404 page with custom title.    
    """
    return render(
        request,
        '404.html',
        {
            'title': _('Page Not Found - Brice Petit'),
        }
    )