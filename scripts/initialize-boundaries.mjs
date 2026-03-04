#!/usr/bin/env node
/**
 * Safety Boundary Initialization Script
 * 
 * This script helps initialize the safety boundary files
 * by copying template files to the workspace.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const skillDir = path.join(__dirname, '..');

// Files to copy
const files = [
  '授权边界清单.md',
  '结果确认模板.md',
  '沟通反馈机制.md'
];

/**
 * Main function
 */
async function main() {
  console.log('🚀 Safety Boundary Initialization');
  console.log('═══════════════════════════════');
  console.log();

  // Get target directory (default to current working directory)
  const targetDir = process.argv[2] || process.cwd();
  
  console.log(`📂 Target directory: ${targetDir}`);
  console.log();

  // Create target directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`✅ Created directory: ${targetDir}`);
  }

  // Copy files
  let copied = 0;
  let skipped = 0;

  for (const file of files) {
    const sourcePath = path.join(skillDir, file);
    const targetPath = path.join(targetDir, file);

    if (!fs.existsSync(sourcePath)) {
      console.log(`❌ Source file not found: ${sourcePath}`);
      continue;
    }

    if (fs.existsSync(targetPath)) {
      console.log(`⏭️  Skipped (exists): ${file}`);
      skipped++;
      continue;
    }

    fs.copyFileSync(sourcePath, targetPath);
    console.log(`✅ Copied: ${file}`);
    copied++;
  }

  console.log();
  console.log('═══════════════════════════════');
  console.log(`✅ Done! Copied ${copied} file(s), skipped ${skipped} file(s)');
  console.log();
  console.log('📝 Next steps:');
  console.log('   1. Review the copied files');
  console.log('   2. Customize them to your needs');
  console.log('   3. Start collaborating with your AI assistant!');
  console.log();
}

main().catch(console.error);
