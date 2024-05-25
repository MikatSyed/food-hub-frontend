import React from 'react';

const RecipeDetail = () => {
  // Demo recipe data
  const recipe = {
    name: 'Delicious Homemade Pizza',
    image: 'https://foodhub.modeltheme.com/wp-content/uploads/2019/10/blogpost04-625x375.jpg',
    country: 'Italy',
    purchased_by: 123,
    creatorEmail: 'chef@example.com',
    description: 'This homemade pizza recipe is the perfect way to enjoy a delicious and authentic Italian-style pizza at home. The crust is made from scratch and topped with a flavorful tomato sauce, mozzarella cheese, and your choice of toppings.',
    ingredients: [
      '1 cup warm water',
      '1 teaspoon active dry yeast',
      '2 1/2 cups all-purpose flour',
      '1 teaspoon salt',
      '1 tablespoon olive oil',
      '1 can (28 oz) crushed tomatoes',
      '2 cloves garlic, minced',
      '1 teaspoon dried oregano',
      '1/2 teaspoon red pepper flakes',
      '8 oz mozzarella cheese, shredded'
    ],
    instructions: [
      'In a large bowl, combine the warm water and yeast. Let sit for 5 minutes until the yeast is activated.',
      'Add the flour, salt, and olive oil to the bowl. Mix until a shaggy dough forms.',
      'Turn the dough out onto a lightly floured surface and knead for 5-7 minutes until smooth and elastic.',
      'Place the dough in a greased bowl, cover, and let rise for 1 hour.',
      'Meanwhile, make the sauce by combining the crushed tomatoes, garlic, oregano, and red pepper flakes in a saucepan. Simmer for 10 minutes.',
      'Preheat the oven to 450°F (230°C).',
      'Roll or stretch the dough into a 12-inch circle and place on a baking sheet or pizza stone.',
      'Spread the sauce over the dough and top with the shredded mozzarella cheese.',
      'Bake for 12-15 minutes, or until the crust is golden brown and the cheese is melted and bubbly.',
      'Slice and serve hot!'
    ],
    youtubeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 relative">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="h-full w-full object-cover rounded-l-lg"
              />
              <div className="absolute top-0 right-0 m-4 bg-[#fb651e] text-white px-3 py-1 rounded-full text-sm font-medium">
                {recipe.country}
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {recipe.name}
              </h2>
              <div className="flex items-center mb-6">
                <div className="flex items-center mr-6">
                  <svg
                    className="h-5 w-5 text-gray-500 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-gray-700 text-sm">
                    {recipe.purchased_by} purchased
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-gray-500 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  <span className="text-gray-700 text-sm">
                    {recipe.creatorEmail}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 mb-6">{recipe.description}</p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Ingredients
                </h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Instructions
                </h3>
                <ol className="list-decimal pl-6 text-gray-700 space-y-1">
                  {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Video
                </h3>
                <div className="relative pb-9/16 h-0 overflow-hidden rounded-lg shadow-lg">
                  <iframe
                    src={recipe.youtubeUrl}
                    title="Recipe Video"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
