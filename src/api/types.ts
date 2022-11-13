export type Product = {
  // Identifiant unique du produit
  id: string;
  // Nom du produit à afficher
  label: string;
  // Description du produit
  description: string;
  // Prix en centimes (integer)
  price: number;
  // Identifiant de la catégorie parente
  category_id: string;
  // URL vers l'image miniature
  thumbnail_url: string | null;
}

export type Category = {
  // Identifiant unique du produit
  id: string;
  // Index de la catégorie dans la boutique
  index: number;
  // Nom du produit à afficher
  label: string;
  // Description du produit
  description: string;
}

