-- Criação da tabela de produtos
CREATE TABLE IF NOT EXISTS public.produtos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome TEXT NOT NULL,
    descricao TEXT NOT NULL,
    categoria TEXT NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    preco_antigo DECIMAL(10, 2),
    imagem_url TEXT NOT NULL,
    destaque_tag TEXT,
    tags JSONB DEFAULT '[]'::jsonb,
    estoque INTEGER NOT NULL DEFAULT 0,
    criado_em TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Configurações de RLS (Row Level Security)
ALTER TABLE public.produtos ENABLE ROW LEVEL SECURITY;

-- Permite que qualquer pessoa leia os produtos (Público)
CREATE POLICY "Produtos são públicos para leitura"
    ON public.produtos FOR SELECT
    USING (true);
