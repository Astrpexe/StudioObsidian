import AdmZip from 'adm-zip';
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
    try {
        const zip = new AdmZip();
        const projectRoot = process.cwd();

        // Add core directories
        const foldersToAdd = ['app', 'components', 'public', 'lib', 'hooks'];
        foldersToAdd.forEach(folder => {
            const folderPath = path.join(projectRoot, folder);
            if (fs.existsSync(folderPath)) {
                zip.addLocalFolder(folderPath, folder);
            }
        });

        // Add config files (handles both Tailwind v3 and v4 setups)
        const filesToAdd = ['package.json', 'tailwind.config.ts', 'postcss.config.mjs', 'tsconfig.json', 'next.config.ts', 'components.json'];
        filesToAdd.forEach(file => {
            const filePath = path.join(projectRoot, file);
            if (fs.existsSync(filePath)) {
                zip.addLocalFile(filePath);
            }
        });

        const zipBuffer = zip.toBuffer();
        return new NextResponse(zipBuffer, {
            headers: {
                'Content-Type': 'application/zip',
                'Content-Disposition': 'attachment; filename=project-source.zip',
            },
        });
    } catch (error) {
        console.error("ZIP Error:", error);
        return new NextResponse('Error generating zip', { status: 500 });
    }
}
