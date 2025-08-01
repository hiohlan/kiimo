import "reflect-metadata"
import { plainToClass } from "class-transformer"
import {
  ArrayNotEmpty,
  IsDefined,
  IsIn,
  IsNotEmptyObject,
  IsString,
  MaxLength,
  validate,
} from "class-validator"

export async function validateLayout(
  content: Record<string, unknown>
): Promise<boolean> {
  const layout = plainToClass(Layout, content)
  const errors = await validate(layout)

  if (errors.length) {
    console.log(errors.map((e) => e.toString()).join(", "))
  }

  return !errors.length
}

export class Layout {
  @IsString()
  name: string

  @IsString()
  nameTH: string

  @IsString()
  version: string

  @IsString()
  @IsIn(["Thai", "Lao"])
  language: string

  @ArrayNotEmpty()
  @IsIn(
    ["Base", "Shift", "AltGr", "Command", "Option", "Control", "ShiftAltGr"],
    {
      each: true,
    }
  )
  layers: Array<
    "Base" | "Shift" | "AltGr" | "Command" | "Option" | "Control" | "ShiftAltGr"
  >

  @IsDefined()
  @IsNotEmptyObject()
  keys: Record<string, string[]>

  @IsDefined()
  os: OSAttributes
  
  @IsString()
  license: string
}

interface OSAttributes {
  windows: WindowsAttributes
}

export class WindowsAttributes {
  @IsString()
  company: string

  @IsString()
  localeId: string

  @IsString()
  @MaxLength(8, {
    message: "Installer name cannot be longer than 8 characters",
  })
  installerName: string
}
