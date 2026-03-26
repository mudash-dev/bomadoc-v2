import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface AccessibleTooltipProps {
    children: React.ReactNode;
    label: string;
    side?: "top" | "bottom" | "left" | "right";
}

export function AccessibleTooltip(
    { children, label, side = "top"}: AccessibleTooltipProps
){
    return (
        <TooltipProvider>
            <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    side={side}
                    className="bg-brand text-black dark:text-white border-none px-4 py-2 text-sm font-medium shadow-xl animate-in fade-in zoom-in-95 "
                >
                    {label}
                </TooltipContent>

            </Tooltip>

        </TooltipProvider>
    )

}