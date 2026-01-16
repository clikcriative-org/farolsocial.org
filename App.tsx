
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Donors from './components/Donors';
import News from './components/News';
import ChatBot from './components/ChatBot';
import WhatsAppButton from './components/WhatsAppButton';
import { Page } from './types';
import { Utensils, GraduationCap, Heart, Users, MapPin, Phone, Instagram, Facebook, Mail, Send, CheckCircle, Shirt } from 'lucide-react';

const App: React.FC = () => {
  const [page, setPage] = React.useState<Page>('home');

  const renderPage = () => {
    switch(page) {
      case 'donors': return <Donors />;
      case 'news': return <News />;
      case 'programs': return <ProgramsSection />;
      case 'about': return <AboutSection />;
      default: return (
        <>
          <Hero onDonate={() => setPage('donors')} />
          <StatsSection />
          <ProgramsSection />
        </>
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={page} setPage={setPage} />
      
      <main className="flex-1">
        {renderPage()}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-6">
                <span className="text-3xl font-black tracking-tighter text-white">
                  FAROL<span className="text-indigo-400">SOCIAL</span>
                </span>
              </div>
              <p className="max-w-sm text-slate-400">
                Transformando a realidade de centenas de famílias através da solidariedade e educação. Juntos para amar e servir.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-5 h-5 text-indigo-500" />
                  <span>RUA VF 48 - SETOR FINSOCIAL - GOIÂNIA</span>
                </li>
                <li className="flex items-center space-x-3 text-sm">
                  <Phone className="w-5 h-5 text-indigo-500" />
                  <span>(62) 98283-9761</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Siga-nos</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs">
            &copy; {new Date().getFullYear()} Farol Social. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      <ChatBot />
    </div>
  );
};

const StatsSection = () => (
  <div className="bg-white py-12 border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-4xl font-black text-indigo-600">5.000+</p>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-1">Refeições</p>
        </div>
        <div>
          <p className="text-4xl font-black text-indigo-600">80+</p>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-1">Famílias</p>
        </div>
        <div>
          <p className="text-4xl font-black text-indigo-600">45</p>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-1">Voluntários</p>
        </div>
        <div>
          <p className="text-4xl font-black text-indigo-600">25</p>
          <p className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-1">Anos de História</p>
        </div>
      </div>
    </div>
  </div>
);

const ProgramsSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">O que fazemos</h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
          Nossas frentes de atuação visam o desenvolvimento integral do ser humano através de projetos contínuos e sazonais.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group bg-orange-50 p-8 rounded-[2.5rem] border border-orange-100 hover:shadow-xl transition-all h-full flex flex-col">
          <div className="bg-orange-500 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
            <Utensils className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Segurança Alimentar</h3>
          <p className="text-slate-600 leading-relaxed mb-6 flex-1 text-sm">
            Distribuímos cestas básicas mensais para famílias que enfrentam a insegurança alimentar severa. Nosso foco é garantir que nenhuma criança durma com fome.
          </p>
          <ul className="space-y-2 text-xs font-medium text-slate-500">
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
              <span>Cestas básicas completas</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
              <span>Acompanhamento nutricional</span>
            </li>
          </ul>
        </div>

        <div className="group bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100 hover:shadow-xl transition-all h-full flex flex-col">
          <div className="bg-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-indigo-200">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Reforço Escolar</h3>
          <p className="text-slate-600 leading-relaxed mb-6 flex-1 text-sm">
            Apoio pedagógico no contraturno escolar para crianças do ensino fundamental, combatendo o analfabetismo funcional e a evasão escolar na região.
          </p>
          <ul className="space-y-2 text-xs font-medium text-slate-500">
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
              <span>Aulas de Português e Matemática</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
              <span>Oficinas de leitura e inclusão digital</span>
            </li>
          </ul>
        </div>

        <div className="group bg-teal-50 p-8 rounded-[2.5rem] border border-teal-100 hover:shadow-xl transition-all h-full flex flex-col">
          <div className="bg-teal-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-200">
            <Shirt className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Campanha do Agasalho</h3>
          <p className="text-slate-600 leading-relaxed mb-6 flex-1 text-sm">
            Projeto sazonal focado em proteger nossas famílias durante o inverno. Arrecadamos e distribuímos roupas de frio e cobertores para quem mais precisa.
          </p>
          <ul className="space-y-2 text-xs font-medium text-slate-500">
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
              <span>Arrecadação de roupas e sapatos</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-teal-600 rounded-full"></span>
              <span>Distribuição de cobertores novos</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="mt-24 bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Entre em Contato</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Tem alguma dúvida, sugestão ou deseja nos visitar? Preencha o formulário ao lado e nossa equipe retornará o mais breve possível.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-3 rounded-2xl shadow-sm text-indigo-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">E-mail</p>
                <p className="text-slate-500">igrejafarolsocial@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white p-3 rounded-2xl shadow-sm text-indigo-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Telefone</p>
                <p className="text-slate-500">(62) 98283-9761</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full py-12 text-center animate-in fade-in zoom-in duration-300">
              <div className="bg-green-100 p-4 rounded-full text-green-600 mb-6">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Mensagem Enviada!</h3>
              <p className="text-slate-500">Obrigado por entrar em contato. Responderemos em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nome</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Assunto</label>
                <input 
                  required
                  type="text" 
                  placeholder="Como podemos ajudar?"
                  className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all"
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Mensagem</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full px-4 py-3 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-indigo-700 transition-all active:scale-[0.98] flex items-center justify-center space-x-2"
              >
                <span>Enviar Mensagem</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="relative">
            <img 
              src="https://i.postimg.cc/0j0H3h9p/farol-comunidade.png" 
              className="rounded-[3rem] shadow-2xl relative z-10 w-full h-auto object-cover aspect-video lg:aspect-square" 
              alt="Comunidade Farol Social" 
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1470&q=80';
              }}
            />
            <div className="absolute -top-4 -left-4 w-full h-full bg-indigo-100 rounded-[3rem] -z-0"></div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Nossa História e Missão</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            O Farol Social nasceu da união de vizinhos que decidiram não ignorar a realidade de crianças e adultos em vulnerabilidade no Setor Finsocial. Com o lema "Amar e Servir", crescemos e nos tornamos um ponto de apoio vital na região.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <Users className="w-8 h-8 text-indigo-600 mb-3" />
              <h4 className="font-bold text-slate-900">Comunidade</h4>
              <p className="text-sm text-slate-500">Forte laço com as famílias locais.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <Heart className="w-8 h-8 text-red-500 mb-3" />
              <h4 className="font-bold text-slate-900">Empatia</h4>
              <p className="text-sm text-slate-500">Cuidamos de cada um como se fosse único.</p>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  </section>
);

export default App;
