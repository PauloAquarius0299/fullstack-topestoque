import { useContext, useEffect, useState } from 'react';
import { CategoryFormData, CategoryResponse, ChangeEvent } from '../../types';
import toast from 'react-hot-toast';
import { addCategory } from '../../state/CategoryService';
import { AppContext } from '../../context/AppContext';

const CategoryForm = () => {

  const context = useContext(AppContext);
    if (!context) {
      throw new Error("AppContext is not available");
    }
  
  const { categories, setCategories } = context;
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    bgColor: "#95a3bb",
  });

  useEffect(() => {
    console.log(data)
  }, [data]);

  const onChangeHandler = (e: ChangeEvent) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((data: CategoryFormData) => ({ ...data, [name]: value }));
  };

  const imageEmoji = image ? "✅" : "🔗";

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    if (!image) {
      toast.error('Selecione a imagem da categoria');
      return;
    }
    const formData = new FormData();
    formData.append("category", JSON.stringify(data));
    formData.append("file", image);
    try {
      const res: CategoryResponse = await addCategory(formData);
      if (res.status === 201) {
        setCategories([...categories, { 
          ...res.data, 
          categoryId: res.data.id, 
          createdAt: new Date(), 
          updatedAt: new Date(),
          imageUrl: URL.createObjectURL(image) 
        }]);
        toast.success("Categoria criada com sucesso!");
        setData({
          name: '',
          description: '',
          bgColor: '',
        });
        setImage(null);
      }
    } catch (error) {
      console.log(error);
      toast.error('Erro ao criar categoria');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-8 w-full max-w-2xl mx-auto gap-4">
      <div className="flex flex-col gap-8">
        <div className="w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-65 md:p-8">
          <form className="space-y-6" onSubmit={onSubmitHandler} >
            {/* Upload de Imagem */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <label 
                htmlFor="image" 
                className="cursor-pointer flex flex-col items-center gap-2 group"
              >
                <div className="p-4 rounded-lg group-hover:border-blue-500 transition-colors duration-200">
                {imageEmoji}
                <input 
                type="file" 
                name="image" 
                id="image" 
                accept="image/*" 
                className="hidden" 
                onChange={(e) => setImage(e.target.files?.[0] || null)} 
                />
                </div>
                <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-200">
                {image ? "Imagem selecionada" : "Clique para selecionar imagem"}
                </span>
              </label>
            </div>

            {/* Nome da categoria */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome da Categoria
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ex: Eletrônicos, Moda, Decoração..."
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                onChange={onChangeHandler}
                value={data.name}
              />
            </div>

            {/* Descrição */}
            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Descrição
              </label>
              <textarea
                rows={4}
                name="description"
                id="description"
                placeholder="Forneça uma descrição detalhada desta categoria..."
                onChange={onChangeHandler}
                value={data.description}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 min-h-[120px]"
              ></textarea>
            </div>

            {/* Cor de fundo */}
            <div className="space-y-2">
              <label htmlFor="bgColor" className="block text-sm font-medium text-gray-700 mb-1">
                Cor de Destaque
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="color"
                  name="bgColor"
                  id="bgColor"
                  onChange={onChangeHandler}
                  value={data.bgColor}
                  className="w-12 h-12 p-1 border border-gray-300 rounded-md cursor-pointer hover:ring-2 hover:ring-gray-200 transition-all duration-200"
                />
                <span className="text-sm text-gray-500">
                  Selecione uma cor para identificar a categoria
                </span>
              </div>
            </div>

            {/* Botão de Salvar */}
            <div className="pt-8">
              <button 
                type="submit" 
                disabled={loading}

                className="w-full button-primary mt-8"
              >
                {loading ? "loading..." : "Salvar Categoria"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;