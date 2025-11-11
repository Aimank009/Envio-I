#!/bin/bash

echo "🔍 Mercury Indexer Diagnostic Tool"
echo "=================================="
echo ""

cd /Users/aimankhan/Desktop/ansh/mercury_indexer_2

echo "✅ Checking configuration..."
echo "- Network ID: 999"
echo "- Start Block: 0"
echo "- ChronoGrid: 0xBE584d086e36406C7bF800101ffAC100542A7B38"
echo "- ChronoGridWrapper: 0xe890F67f7ea28aa821C06eE8d4ea46e6Ab147850"
echo ""

echo "📦 Checking dependencies..."
if [ -d "node_modules/@supabase" ]; then
    echo "✅ Supabase installed"
else
    echo "❌ Supabase NOT installed"
fi

if [ -d "node_modules/dotenv" ]; then
    echo "✅ Dotenv installed"
else
    echo "❌ Dotenv NOT installed"
fi

if [ -d "node_modules/envio" ]; then
    echo "✅ Envio installed"
else
    echo "❌ Envio NOT installed"
fi
echo ""

echo "🗄️ Checking Supabase configuration..."
if [ -f ".env.supabase" ]; then
    echo "✅ .env.supabase exists"
    if grep -q "cxassvramkyccyjchnji" .env.supabase; then
        echo "✅ Supabase URL configured"
    fi
else
    echo "❌ .env.supabase NOT found"
fi
echo ""

echo "📊 Checking database files..."
if [ -f "supabase-tables.sql" ]; then
    echo "✅ supabase-tables.sql exists ($(wc -l < supabase-tables.sql) lines)"
else
    echo "❌ supabase-tables.sql NOT found"
fi
echo ""

echo "🔧 Checking source files..."
if [ -f "src/EventHandlers.ts" ]; then
    echo "✅ EventHandlers.ts exists"
    handlers=$(grep -c "\.handler(async" src/EventHandlers.ts)
    echo "   Found $handlers event handlers"
else
    echo "❌ EventHandlers.ts NOT found"
fi

if [ -f "src/supabaseClient.ts" ]; then
    echo "✅ supabaseClient.ts exists"
    functions=$(grep -c "^export async function" src/supabaseClient.ts)
    echo "   Found $functions insert functions"
else
    echo "❌ supabaseClient.ts NOT found"
fi
echo ""

echo "🏗️ Checking build..."
pnpm build 2>&1 | tail -3
echo ""

echo "📋 Next Steps:"
echo "1. Make sure Docker Desktop is running"
echo "2. Run: pnpm dev"
echo "3. Check logs for: '💰 DEPOSIT EVENT' or other emoji indicators"
echo "4. If no events appear, check if blockchain has any transactions"
echo "5. Visit http://localhost:8080 for GraphQL"
echo ""

echo "🚀 To start indexer:"
echo "   cd /Users/aimankhan/Desktop/ansh/mercury_indexer_2"
echo "   pnpm dev"
